import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import BotaoSimples from "../Botao/Simples";
import PropTypes from 'prop-types';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  botaoFechar: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  titulo: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(1),
  },
  nome: {
    marginLeft: theme.spacing(1)
  }
});

const Titulo = withStyles(styles)((props) => {
  const { children, classes, fechar, avatar, ...other } = props;
  return <>
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <div className={classes.titulo} >
        {avatar ? avatar : null}
        <Typography variant="h6" className={classes.nome}>{children}</Typography>
      </div>
      <IconButton
        aria-label="close"
        className={classes.botaoFechar}
        onClick={fechar}
      >
        <CloseIcon />
      </IconButton>
    </MuiDialogTitle>
  </>;
});

export default function Modal({ modal }) {
  const [aberto, setAberto] = React.useState(false);

  function abrir() {
    setAberto(true);
  }

  function fechar() {
    setAberto(false);
  }

  return <>
    <BotaoSimples
      variant="outlined"
      nome={modal.botao.abrir.nome}
      onClick={abrir}
      cor={modal.botao.abrir.cor}
    />
    <Dialog
      onClose={fechar}
      aria-labelledby="customized-dialog-title"
      open={aberto}
      fullWidth={true}
      maxWidth={"sm"}
    >
      <Titulo id="customized-dialog-title" fechar={fechar} avatar={modal.titulo.avatar}>
        {modal.titulo.nome}
      </Titulo>
      <DialogContent dividers>
        {modal.conteudo}
      </DialogContent>
      <DialogActions>
        {modal.botao.cancelar ? (
          <BotaoSimples
            nome="Cancelar"
            onClick={fechar}
            cor="primary"
          />

        ) : null}
        <BotaoSimples
          variant="contained"
          nome={modal.botao.acaoPrincipal.nome}
          onClick={modal.botao.acaoPrincipal.funcao}
          cor={modal.botao.acaoPrincipal.cor}
        />
      </DialogActions>
    </Dialog>
  </>;
}

Modal.propTypes = {
  modal: PropTypes.shape({
    titulo: PropTypes.shape({
      nome: PropTypes.string.isRequired,
      avatar: PropTypes.element
    }),
    conteudo: PropTypes.element,
    botao: PropTypes.shape({
      abrir: PropTypes.shape({
        nome: PropTypes.string.isRequired,
        cor: PropTypes.string
      }),
      acaoPrincipal: PropTypes.shape({
        nome: PropTypes.string.isRequired,
        cor: PropTypes.string,
        funcao: PropTypes.func.isRequired
      }),
      cancelar: PropTypes.bool
    })
  })
}

Modal.defaultProps = {
  modal: PropTypes.shape({
    titulo: PropTypes.shape({
      avatar: null
    }),
    botao: PropTypes.shape({
      abrir: PropTypes.shape({
        cor: "secondary",
      }),
      acaoPrincipal: PropTypes.shape({
        cor: "primary",
      }),
      cancelar: true
    })
  })
}
