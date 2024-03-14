import { ChangeEvent, FC } from "react";
import { StyleInputSearch } from "@components/ui/input-search/styles";
import { Box } from "@mui/material";
import { IconSearch } from "@components/icons";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  value: string;
  onClear: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const InputSearch: FC<Props> = ({
  value,
  onChange,
  onClear,
  placeholder = "Трек, альбом, исполнитель",
}) => {
  return (
    <StyleInputSearch
      onChange={onChange}
      value={value}
      startAdornment={
        <Box sx={{ pl: 3 }}>
          <IconSearch />
        </Box>
      }
      placeholder={placeholder}
      endAdornment={
        value && (
          <Box
            display="flex"
            alignItems="center"
            onClick={onClear}
            sx={{ pr: 1, opacity: 0.5, cursor: "pointer" }}
          >
            <CloseIcon />
          </Box>
        )
      }
    />
  );
};
