import { Component, OnInit } from "@angular/core";

import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
export interface NotaP { id: string; nota: number; name: string; url: string; tipo: number}
import 'rxjs/add/observable/of';
import * as $ from 'node_modules/jquery';
import 'rxjs/add/operator/map';


@Component({
    selector: 'ap-proposta',
    templateUrl: './formproposta.component.html',
    styleUrls: ['./formproposta.component.css']
})

export class FormProposta implements OnInit {

    notacolecao: AngularFirestoreDocument<NotaP>;
    notas: Observable<NotaP>;

    newMedia: number;
    newCont: number;
    
    constructor( private db: AngularFirestore) {}

    ngOnInit(){
        this.notacolecao = this.db.doc('resultados/notapropostaagro')
        this.notas = this.notacolecao.valueChanges()
    }

    updateNota(){
        this.newMedia = this.newMedia / this.newCont++;
        this.notacolecao.update({nota: this.newMedia, tipo: this.newCont}) 
    }
        
}