package br.uff.tecnomarias.domain.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@NamedQueries({
        @NamedQuery(name = "Vaga.findByEmpresa", query = "SELECT v FROM Vaga v WHERE v.empresa = :empresa"),
        @NamedQuery(name = "Vaga.findByArea", query = "SELECT v FROM Vaga v WHERE v.areaAtuacao LIKE :area"),
        @NamedQuery(name = "Vaga.findByCargo", query = "SELECT v FROM Vaga v WHERE v.cargo LIKE :cargo"),
        @NamedQuery(name = "Vaga.findByValor",query = "SELECT v FROM Vaga v WHERE v.valor >= :min AND v.valor < :max")
})
public class Vaga {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_empresa")
    private PessoaJuridica empresa;

    @NotNull
    @Column(nullable = false)
    private String areaAtuacao;

    @NotNull
    @Column(nullable = false)
    private String cargo;

    @NotNull
    @Column(nullable = false)
    private String descricao;

    private Double valor;

    public Vaga() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public PessoaJuridica getEmpresa() {
        return empresa;
    }

    public void setEmpresa(PessoaJuridica empresa) {
        this.empresa = empresa;
    }

    public String getAreaAtuacao() {
        return areaAtuacao;
    }

    public void setAreaAtuacao(String areaAtuacao) {
        this.areaAtuacao = areaAtuacao;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }
}
