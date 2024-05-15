// components/ViewCounter.tsx
"use client";

import { createClient } from "@/supabase/client";
import React, { useEffect, useState } from "react";

const supabase = createClient();

interface ViewCounterProps {
    slug: string;
    noCount?: boolean;
    showCount?: boolean;
}

const ViewCounter: React.FC<ViewCounterProps> = ({ slug, noCount = false, showCount = true }) => {
    const [views, setViews] = useState(0);

    useEffect(() => {
        const incrementView = async () => {
            try {
                let { error } = await supabase.rpc("increment", {
                    slug_text: slug,
                });

                if (error) {
                    console.error("Error incrementing view count inside try block:", error);
                }
            } catch (error) {
                console.error("An error occurred while incrementing the view count:", error);
            }
        };

        if (!noCount) {
            incrementView();
        }
    }, [slug, noCount]);

    useEffect(() => {
        const getViews = async () => {
            try {
                let { data, error } = await supabase
                    .from('views')
                    .select('count')
                    .match({ slug })
                    .single();

                if (error) {
                    console.error("Error getting view count inside try block:", error);
                }

                setViews(data ? data.count : 0);
            } catch (error) {
                console.error("An error occurred while getting the view count:", error);
            }
        };

        getViews();
    }, [slug]);

    if (showCount) {
        return <div>{views} views</div>;
    } else {
        return null;
    }
};

export default ViewCounter;