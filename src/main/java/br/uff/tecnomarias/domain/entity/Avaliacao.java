package br.uff.tecnomarias.domain.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
public class Avaliacao {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull(message = "Comentario é obrigatório")
    @Column(length = 500, nullable = false)
    private String comentario;

    @NotNull(message = "Nota é obrigatório")
    @Column(nullable = false)
    private Double nota;

    @NotNull(message = "Data de avaliacao é obrigatorio")
    @Column(nullable = false)
    private LocalDateTime timestamp;

    private String nomeAvaliadora;

    @ManyToOne
    @JoinColumn(name = "id_empresa")
    private PessoaJuridica empresa;

    public Avaliacao() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public Double getNota() {
        return nota;
    }

    public void setNota(Double nota) {
        this.nota = nota;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public String getNomeAvaliadora() {
        return nomeAvaliadora;
    }

    public void setNomeAvaliadora(String avaliadora) {
        this.nomeAvaliadora = avaliadora;
    }

    public PessoaJuridica getEmpresa() {
        return empresa;
    }

    public void setEmpresa(PessoaJuridica empresa) {
        this.empresa = empresa;
    }
}
