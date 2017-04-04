import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IManual } from './manual';
import { ManualService } from './manual.service';

@Component({
    templateUrl: 'app/manuals/manual-detail.component.html'
})
export class ManualDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Manual Detail';
    manual: IManual;
    errorMessage: string;
    private sub: Subscription;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private manualService: ManualService) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getManual(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getManual(id: number) {
        this.manualService.getManual(id).subscribe(
            manual => this.manual = manual,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this.router.navigate(['/manuals']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Panual Detail: ' + message;
    }
}