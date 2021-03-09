package br.uff.tecnomarias.domain.entity;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
public class PessoaFisica extends Pessoa implements Serializable {
    private static final long serialVersionUID = 1L;

    @Column(unique = true)
    @Size(min = 11, max = 11, message = "CPF deve ter 11 caracteres")
    private String cpf;

    @OneToOne(cascade = CascadeType.ALL)
    @Column(name = "id_links")
    private Links links;

    @OneToMany(mappedBy = "avaliadora", cascade = CascadeType.REMOVE)
    private List<Avaliacao> avaliacoes = new ArrayList<>();

    public PessoaFisica() {
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Links getLinks() {
        return links;
    }

    public void setLinks(Links links) {
        this.links = links;
    }
}
