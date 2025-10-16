import { FC, useEffect, useRef } from "react";
import { Box, CircularProgress } from "@mui/material";

type Props = {
  onIntersect: () => void;
  isLoading?: boolean;
};

export const InfiniteScrollTrigger: FC<Props> = ({
  onIntersect,
  isLoading = false,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      }
    );

    observer.observe(trigger);

    return () => {
      observer.unobserve(trigger);
    };
  }, [onIntersect]);

  return (
    <Box
      ref={triggerRef}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
        minHeight: 60,
      }}
    >
      {isLoading && <CircularProgress size={24} sx={{ color: "white" }} />}
    </Box>
  );
};

