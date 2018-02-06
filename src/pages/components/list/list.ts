import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { sysOptions } from '../../../providers/system.constants'

@Component({
    selector:'list',
    templateUrl:'list.html'
})

export class ListPage {
    @Input() list: any;
    @Output() itemClick = new EventEmitter<any>();

    private translate: TranslateService;

    constructor(translate: TranslateService){
        this.translate = translate;
        this.translate.use(sysOptions.systemLanguage);
    }
    
    onClick(item) {
        // console.log("list", item);
        this.itemClick.emit(item);
    }
}
