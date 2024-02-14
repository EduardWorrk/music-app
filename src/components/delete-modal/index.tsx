import { FC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Divider from "@mui/material/Divider";

type Props = {
  open: boolean;
  title: string;
  description: string;
  onDelete: () => void;
  onClose: () => void;
};
export const DeleteModal: FC<Props> = ({
  open,
  title,
  description,
  onClose,
  onDelete,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>

      <Divider />
      <DialogActions>
        <Button color="error" size="small" onClick={onDelete}>
          Да, удалить
        </Button>
        <Button
          color="inherit"
          variant="outlined"
          size="small"
          onClick={onClose}
          autoFocus
        >
          Отмена
        </Button>
      </DialogActions>
    </Dialog>
  );
};
