package br.uff.tecnomarias.domain.entity;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Pessoa {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull(message = "nome é obrigatório")
    private String nome;

    @NotNull(message = "email é obrigatório")
    private String email;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "pessoa")
    private List<Telefone> telefoneList;

    @Valid
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_endereco")
    private Endereco endereco;

    public Pessoa() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Telefone> getTelefones() {
        return telefoneList;
    }

    public void setTelefones(List<Telefone> telefones) {
        this.telefoneList = telefones;
    }

    public boolean addTelefone(@Valid Telefone telefone) {
        if (this.telefoneList.stream().anyMatch(tel -> tel.getNumeroCompleto().equals(telefone.getNumeroCompleto())))
            return false;
        this.telefoneList.add(telefone);
        return true;
    }

    public boolean removeTelefone(Telefone telefone) {
        Optional<Telefone> telSalvo = this.telefoneList.stream()
                .filter(tel -> tel.getNumeroCompleto().equals(telefone.getNumeroCompleto()))
                .findFirst();
        if (!telSalvo.isPresent()) {
            this.telefoneList.remove(telSalvo.get());
            return true;
        }
        return false;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }
}