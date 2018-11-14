import { Component, OnInit } from "@angular/core";

import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
export interface ResultProposta { mediaA: number, mediaD: number, mediaP: number, nota: string; name: string; url: string; tipo: string}
export interface ResultApresentacao { mediaA: number, mediaD: number, mediaP: number, nota: string; name: string; url: string; tipo: string}
export interface ResultDesenvolvimento { mediaA: number, mediaD: number, mediaP: number, nota: string; name: string; url: string; tipo: string}
import 'rxjs/add/observable/of';

@Component({
    selector: 'ap-resultadoitem',
    templateUrl: './resultadoitem.component.html',
    styleUrls: ['./resultadoitem.component.css']
})

export class ResultadoItem implements OnInit{

    colecaoResultadosProposta: AngularFirestoreCollection<ResultProposta>;
    resultadosProposta: Observable<ResultProposta[]>;
  
    colecaoResultadosApresentacao: AngularFirestoreCollection<ResultApresentacao>;
    resultadosApresentacao: Observable<ResultApresentacao[]>;
  
    colecaoResultadosDesenvolvimento: AngularFirestoreCollection<ResultApresentacao>;
    resultadosDesenvolvimento: Observable<ResultApresentacao[]>;
    
    
    constructor( private db: AngularFirestore) {
        
    }

    ngOnInit(){
        this.colecaoResultadosProposta = this.db.collection('resultados', ref => {
            return ref.where('tipo', '==', "1").orderBy('mediaP', 'desc')
        })
        this.resultadosProposta = this.colecaoResultadosProposta.valueChanges()

        this.colecaoResultadosApresentacao = this.db.collection('resultados', ref => {
            return ref.where('tipo', '==', "2").orderBy('mediaA', 'desc')
        })
        this.resultadosApresentacao = this.colecaoResultadosApresentacao.valueChanges()

        this.colecaoResultadosDesenvolvimento = this.db.collection('resultados', ref => {
            return ref.where('tipo', '==', "3").orderBy('mediaD', 'desc')
        })
        this.resultadosDesenvolvimento = this.colecaoResultadosDesenvolvimento.valueChanges()
    }
    
}