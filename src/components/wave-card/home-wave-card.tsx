import { FC } from "react";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import RefreshIcon from "@mui/icons-material/Refresh";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const WaveCardContainer = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  borderRadius: 12,
  padding: 20,
  color: "white",
  position: "relative",
  overflow: "hidden",
  minHeight: 120,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "0 4px 20px rgba(102, 126, 234, 0.3)",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 25px rgba(102, 126, 234, 0.4)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: -30,
    right: -30,
    width: 60,
    height: 60,
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "50%",
    animation: "wave 3s ease-in-out infinite",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -20,
    left: -20,
    width: 40,
    height: 40,
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "50%",
    animation: "wave 2s ease-in-out infinite reverse",
  },
  "@keyframes wave": {
    "0%, 100%": {
      transform: "scale(1) rotate(0deg)",
    },
    "50%": {
      transform: "scale(1.1) rotate(180deg)",
    },
  },
}));

const WaveIcon = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 8,
  marginBottom: 8,
});

interface HomeWaveCardProps {
  trackCount: number;
  isGenerating: boolean;
  onGenerate: (e: React.MouseEvent) => void;
  onPlay: (e: React.MouseEvent) => void;
  hasTracks: boolean;
}

export const HomeWaveCard: FC<HomeWaveCardProps> = ({
  trackCount,
  isGenerating,
  onGenerate,
  onPlay,
  hasTracks,
}) => {
  const handleGenerate = (e: React.MouseEvent) => {
    e.stopPropagation();
    onGenerate(e);
  };

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    onPlay(e);
  };

  return (
    <WaveCardContainer>
      <Box>
        <WaveIcon>
          <MusicNoteIcon sx={{ fontSize: 24, opacity: 0.9 }} />
          <Typography variant="h5" fontWeight="bold">
            Моя волна
          </Typography>
        </WaveIcon>

        <Typography variant="body2" sx={{ opacity: 0.9, mb: 1, mr: 1 }}>
          Персонально для вас
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          {hasTracks ? `${trackCount} треков` : "Создайте вашу волну"}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          mt: 2,
          alignItems: "center",
        }}
      >
        {hasTracks && (
          <Button
            variant="contained"
            size="small"
            startIcon={<PlayArrowIcon />}
            onClick={handlePlay}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "white",
              fontSize: "12px",
              minWidth: "auto",
              px: 1.5,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              },
            }}
          >
            Запустить
          </Button>
        )}

        <IconButton
          size="small"
          onClick={handleGenerate}
          disabled={isGenerating}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "white",
            width: 32,
            height: 32,
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
            "&:disabled": {
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            },
          }}
        >
          {isGenerating ? (
            <CircularProgress size={16} color="inherit" />
          ) : (
            <RefreshIcon fontSize="small" />
          )}
        </IconButton>
      </Box>
    </WaveCardContainer>
  );
};
