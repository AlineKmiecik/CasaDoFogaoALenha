import { Produto } from './../models/Produto';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  getfogoes_estufas(){
    let Produtos1: Produto[] = [];

    let Produto1: Produto = new Produto();
    
    Produto1.nome = "Fogão Compacto";
    Produto1.valor = 7723.50;
    Produto1.descricao = "Aqueça o ambiente com esse fogão a lenha, um produto que une praticidade e elegância. Com estrutura elaborada, garante maior resistência e durabilidade. Além disso, o fogão pode decorar qualquer ambiente, com seu acabamento singular que agrega charme e sofisticação ao visual do produto. Elaborado com um design único, o fogão a lenha da Antonow preenche o ambiente de beleza e aconchego";
    Produto1.img = "https://images-americanas.b2w.io/produtos/01/00/img/79530/8/79530876_1GG.jpg";
    Produto1.marca = "Antonow";
    Produtos1.push(Produto1);
    
    Produto1 = new Produto();
    Produto1.nome = "Fogão Brasileiro" ;
    Produto1.valor = 7537.30;
    Produto1.descricao = "Fogão à lenha com forno e depósito para lenha ou utilitários. Opcional com serpentina para aquecimento de águas residenciais.";
    Produto1.img = "https://a-static.mlcdn.com.br/618x463/fogao-a-lenha-brasil-chapa-vitro-preto-c-inox-e-101-vl-e-antonow/mercocomercial/10071515/88f187659e6ae5c95d418585e5d43911.jpg";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "Fogão Viena" ;
    Produto1.valor = 4541.00;
    Produto1.marca = "Antonow";
    Produto1.descricao = "Fogão à lenha. Medidas: 77 x 108 x 80 cm, Tamanho da chapa: 75 x 45 cm";
    Produto1.img = "https://images.tcdn.com.br/img/img_prod/612392/fogao_a_lenha_c_opcao_de_chapa_vitroceramica_viena_271_1_20180128160851.jpg";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "Fogão Genebra" ;
    Produto1.valor = 5541.00;
    Produto1.marca = "Antonow";
    Produto1.descricao = "Fogão à lenha com chapa maior e aba na traseira para cobrir a saída da chaminé.";
    Produto1.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDxHwpIehQmALqhOlhFLPRLcT6AoMo2qsQg&usqp=CAU";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "Fogão N°2 Imperador" ;
    Produto1.valor = 3629;
    Produto1.marca = "Venax";
    Produto1.descricao = "Chapa de ferro fundido polida tamanho 89×63 cm,Corpo do fogão em pintura esmalte vítreo";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2015/03/n2imperadoramarelo2.png";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "N°2 Imperador Vítreo" ;
    Produto1.valor = 3829;
    Produto1.marca = "Venax";
    Produto1.descricao = "Fogão a Lenha Gabinete n° 2 Séc. XV, modelo Imperador Vítreo";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2015/03/N%C2%B02-Imperador-V%C3%ADtreo.png";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "Nº 1 Renaissance" ;
    Produto1.valor = 2549;
    Produto1.marca = "Venax";
    Produto1.descricao = "Chapa: Ferro Fundido Polido";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2019/11/154300393191.jpg";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "N° 1 Séc. XVIII" ;
    Produto1.valor = 2349;
    Produto1.marca = "Venax";
    Produto1.descricao = "Chapa de ferro fundido polida tamanho 80×51 cm";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2015/03/n1secXVIIIbranco.png";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "N° 1 Séc. XVIII" ;
    Produto1.valor = 2349;
    Produto1.marca = "Venax";
    Produto1.descricao = "Chapa de ferro fundido polida tamanho 80×51 cm";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2015/03/n1secXVIIIbranco.png";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "N° 2 venax" ;
    Produto1.valor = 2449;
    Produto1.marca = "Venax";
    Produto1.descricao = "Chapa de ferro fundido polida tamanho 89×63 cm";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2015/03/n2branco.png";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "Salamandra" ;
    Produto1.valor = 3300;
    Produto1.marca = "Venax";
    Produto1.descricao = "Chapa de ferro fundido polida";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2015/03/slamandra4.png";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "Chapa P/ Fogão Vitrocêmica" ;
    Produto1.valor = 2458;
    Produto1.marca = "Freitas";
    Produto1.descricao = "Não enferruja e não precisa lixar, Durabilidade, Fácil Limpeza, Beleza.";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2018/11/gera_foto1.jpg";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "Fogão c/ Vitrocerâmica e visor vitrocerâmico" ;
    Produto1.valor = 10398.7;
    Produto1.marca = "Freitas";
    Produto1.descricao = "Fogão a Lenha c/ chapa vitrocerâmica, depósito para lenha e visor vitrocerâmico na fornalhaMedidas c/ Arco de proteção frontal:";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2018/11/IMG_3882_pronta_1024x768_580a61e0b204d.jpg";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "Forno c/ Fogão a Lenha c/ Vitrocerâmica" ;
    Produto1.valor = 8398.7;
    Produto1.marca = "Freitas";
    Produto1.descricao = "Forno c/ Fogão a Lenha c/ Vitrocerâmica";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2018/11/1423678923_039_pequena.jpg";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "Fogão a Lenha c/ Vitrocerâmica Sem Forno" ;
    Produto1.valor = 8356.7;
    Produto1.marca = "Freitas";
    Produto1.descricao = "Fogão a lenha c/ chapa Vitrocerâmica Sem Forno c/ Depósito de lenha";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2018/11/1425470352_020_pequena.jpg";
    Produtos1.push(Produto1);


    
    return Produtos1;
  }

  getChapas(){
    let Produtos1: Produto[] = [];

    let Produto1: Produto = new Produto();
    
    Produto1.nome = "Chapa Ferro Polida";
    Produto1.valor = 223.50;
    Produto1.descricao = "Medidas:81×51 89×63 Componentes: 2 argola diam.24 2 tampão diam.15";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2017/10/chapa-faires-n1.png";
    Produto1.marca = "Chapa";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "Chapa 3 Furos";
    Produto1.valor = 250.50;
    Produto1.descricao = "Tamanhos 75×45 85×47";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2015/03/chapa_com_tres_furos.jpg";
    Produto1.marca = "Chapa";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "Chapa com Bifeteira";
    Produto1.valor = 250.50;
    Produto1.descricao = "Tamanhos 35,5×30 92,5×34";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2016/11/99861.png";
    Produto1.marca = "Chapa";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "Chapa Ferro 4 Furos";
    Produto1.valor = 150.50;
    Produto1.descricao = "Tamanhos 70 x 44";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2016/11/12920.png";
    Produto1.marca = "Chapa";
    Produtos1.push(Produto1);

    return Produtos1;
  }

  getFornos(){
    let Produtos1: Produto[] = [];

    let Produto1: Produto = new Produto();
    
    Produto1.nome = "Forno porta de ferro";
    Produto1.valor = 223.50;
    Produto1.descricao = "Medidas:MD  28 x 34 x 50";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2015/04/Forno-ferrro-fundido-site.png";
    Produto1.marca = "Forno";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "Forno Ferro Fundido com Porta de Vidro";
    Produto1.valor = 250.50;
    Produto1.descricao = "Tamanhos 28 x 34 x 50";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2015/04/Forno-ferrro-fundido-vidro-site.png";
    Produto1.marca = "Forno";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "Porta igloo ferro";
    Produto1.valor = 250.50;
    Produto1.descricao = "Medidas: 26,5 x 36,5 cm ou 31 x 36,5 cm";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2016/04/porta_igloo_99869_99870.png";
    Produto1.marca = "Forno";
    Produtos1.push(Produto1);

    Produto1 = new Produto();
    Produto1.nome = "Porta forno igloo com vidro";
    Produto1.valor = 150.50;
    Produto1.descricao = "Medidas: 26,5 x 36,5 cm ou 31 x 36,5 cm";
    Produto1.img = "http://www.casadofogaoalenha.com.br/wp-content/uploads/2016/04/porta_igloo_91806_91807_999891.png";
    Produto1.marca = "Forno";
    Produtos1.push(Produto1);

    return Produtos1;
  }

}
