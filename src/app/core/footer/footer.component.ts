import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FooterComponent implements OnInit {
  @Input() public htmlScript: string = "";
  @Input() public htmlDesign: string = "";
  @Input() public htmlStyle: string = "";

  constructor() { }

  ngOnInit(): void {
    this.htmlDesign = "<html lang=\"es\"><head> <meta charset=\"utf-8\"/> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"/> <title>AXA BIIBIIC - FOOTER</title> <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css\" integrity=\"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l\" crossorigin=\"anonymous\"> <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css\"></head><body><div class=\"container-fluid mt-5 d-none d-md-block\"> <div class=\"row bg-azul\"> <div class=\"container ptb32\"> <div class=\"row\"> <div class=\"col-sm-12\"> <ul class=\"list-group list-group-horizontal\"> <li class=\"list-group-item\" style=\"width:18.75%; text-align: center; font-size: 14px;\"><a href=\"https://axa.mx/anexos/preguntas-frecuentes\" target=\"_blank\">Preguntas Frecuentes</a></li><li class=\"list-group-item\" style=\"width:12.5%; text-align: center; font-size: 14px;\"><a href=\"https://axa.mx/corporativo/conoce-axa-mexico\" target=\"_blank\">Cónocenos</a></li><li class=\"list-group-item\" style=\"width:18.75%; text-align: center; font-size: 14px;\"><a href=\"https://axa.mx/anexos/aviso-de-privacidad\" target=\"_blank\">Aviso de Privacidad</a></li><li class=\"list-group-item\" style=\"width:12.5%; text-align: center; font-size: 14px;\"><a href=\"https://axa.mx\" target=\"_blank\">Integridad</a></li><li class=\"list-group-item\" style=\"width:12.5%; text-align: center; font-size: 14px;\"><a href=\"https://axa.mx/blogs\" target=\"_blank\">Blog</a></li><li class=\"list-group-item\" style=\"width:12.5%; text-align: center; font-size: 14px;\"><a href=\"https://fundacionaxa.org.mx/\" target=\"_blank\">Fundación AXA</a></li><li class=\"list-group-item\" style=\"width:12.5%; text-align: center; font-size: 14px;\"><a href=\"#\" target=\"_blank\">Contacto</a></li></ul> </div></div></div></div><div class=\"row bg-azul\"> <div class=\"container ptb32\" style=\"border-top: 1px solid #fff;\"> <div class=\"row\"> <div class=\"col-12 text-white text-center\"> <p style=\"font-size: 14px;\">Síguenos en:</p><ul class=\"list-group\" style=\"color:white;\"> <li class=\"list-group-item\"> <a href=\"https://www.facebook.com/axamexico/?ref=br_rs\" target=\"_blank\"><img src=\"https://storage.googleapis.com/quattrocrm-copsis/biibiic/ico_fb.svg\" class=\"ico_contacto\"></a> <a href=\"https://www.instagram.com/axa.mexico/\" target=\"_blank\"><img src=\"https://storage.googleapis.com/quattrocrm-copsis/biibiic/ico_ig.svg\" class=\"ico_contacto\"></a> <a href=\"https://twitter.com/AXAMexico\" target=\"_blank\"><img src=\"https://storage.googleapis.com/quattrocrm-copsis/biibiic/ico_tw.svg\" class=\"ico_contacto\"></a> <a href=\"https://www.youtube.com/user/MexicoSegurosAXA/featured\" target=\"_blank\"><img src=\"https://storage.googleapis.com/quattrocrm-copsis/biibiic/ico_yt.svg\" class=\"ico_contacto\"></a> <a href=\"https://www.linkedin.com/company/axa/life/7c4d90cf-999a-4841-a14c-7561ae39a680/\" target=\"_blank\"><img src=\"https://storage.googleapis.com/quattrocrm-copsis/biibiic/ico_in.svg\" class=\"ico_contacto\"></a> </li></ul> </div></div></div></div></div><div class=\"container-fluid d-sm-block d-md-none\"> <div class=\"row bg-azul\"> <div class=\"container ptb32\"> <div class=\"col-sm-12 text-center\"> <ul class=\"list-group\"> <li class=\"list-group-item\" style=\"text-align: center;\"><a href=\"https://axa.mx/anexos/preguntas-frecuentes\" target=\"_blank\">Preguntas Frecuentes</a></li><li class=\"list-group-item\" style=\"text-align: center;\"><a href=\"https://axa.mx/corporativo/conoce-axa-mexico\" target=\"_blank\">Cónocenos</a></li><li class=\"list-group-item\" style=\"text-align: center;\"><a href=\"https://axa.mx/anexos/aviso-de-privacidad\" target=\"_blank\">Aviso de Privacidad</a></li><li class=\"list-group-item\" style=\"text-align: center;\"><a href=\"https://axa.mx\" target=\"_blank\">Integridad</a></li><li class=\"list-group-item\" style=\"text-align: center;\"><a href=\"https://axa.mx/blogs\" target=\"_blank\">Blog</a></li><li class=\"list-group-item\" style=\"text-align: center;\"><a href=\"https://fundacionaxa.org.mx/\" target=\"_blank\">Fundación AXA</a></li><li class=\"list-group-item\" style=\"text-align: center;\"><a href=\"#\" target=\"_blank\">Contacto</a></li></ul> </div></div></div><div class=\"row bg-azul\"> <div class=\"container ptb32\" style=\"border-top: 1px solid #fff;\"> <div class=\"col-12 text-white text-center\"> <p>Síguenos en:</p><ul class=\"list-group\" style=\"color:white;\"> <li class=\"list-group-item\"> <a href=\"https://www.facebook.com/axamexico/?ref=br_rs\" target=\"_blank\"><img src=\"https://storage.googleapis.com/quattrocrm-copsis/biibiic/ico_fb.svg\" class=\"ico_contacto\"></a> <a href=\"https://www.instagram.com/axa.mexico/\" target=\"_blank\"><img src=\"https://storage.googleapis.com/quattrocrm-copsis/biibiic/ico_ig.svg\" class=\"ico_contacto\"></a> <a href=\"https://twitter.com/AXAMexico\" target=\"_blank\"><img src=\"https://storage.googleapis.com/quattrocrm-copsis/biibiic/ico_tw.svg\" class=\"ico_contacto\"></a> <a href=\"https://www.youtube.com/user/MexicoSegurosAXA/featured\" target=\"_blank\"><img src=\"https://storage.googleapis.com/quattrocrm-copsis/biibiic/ico_yt.svg\" class=\"ico_contacto\"></a> <a href=\"https://www.linkedin.com/company/axa/life/7c4d90cf-999a-4841-a14c-7561ae39a680/\" target=\"_blank\"><img src=\"https://storage.googleapis.com/quattrocrm-copsis/biibiic/ico_in.svg\" class=\"ico_contacto\"></a> </li></ul> </div></div></div></div></body><script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\" integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\"></script><script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js\" integrity=\"sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN\" crossorigin=\"anonymous\"></script><script src=\"js/bootstrap.min.js\"></script></html>";
    this.htmlStyle = "<style type=\"text/css\"> body{background-color: #00008F;}.mb32{margin-bottom: 32px}.mt32{margin-top: 32px}.ptb32{padding: 32px 0;}.center{display: block;margin-left: auto;margin-right: auto;width: auto;}.text-right{float: right;}.text-center{text-align: center;}.bg-azul{background-color: #00008F;}.list-group-item{position: relative;display: block;padding: .5rem;background-color: transparent;border: 0px solid rgba(0,0,0,.125)}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width: 0px;border-left-width: 0;}.ico_contacto{max-width: 32px; color: #fff; margin-right: 16px;}/* unvisited link */ a:link{color: white;}/* visited link */ a:visited{color: white;}/* mouse over link */ a:hover{color: white; text-decoration: none;}/* selected link */ a:active{color: white;}/*! Medium devices (tablets, 768px and up)*/ @media (max-width: 768px){.text-center{text-align: center;}}/*! Small devices (landscape phones, 576px and up)*/ @media (max-width: 576px){.text-center{text-align: center;}.list-group-item{position: relative;display: block;padding: .5rem 0rem;background-color: transparent;border: 0px solid rgba(0,0,0,.125); font-size: 18px;}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width: 0px;border-left-width: 0;}.ico_contacto{max-width: 32px; color: #fff; margin-right: 16px;}}</style>";
  }
}