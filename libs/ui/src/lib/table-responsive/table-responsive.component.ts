import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

const statuses = [
  {
    severity: 'info',
    label: 'Lõppenud',
  },
  {
    severity: 'error',
    label: 'Katkenud',
  },
];
@Component({
  selector: 'cvi-ng-table-responsive',
  templateUrl: './table-responsive.component.html',
  styleUrls: ['table-responsive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableResponsiveComponent {
  @Input() data!: any[];
  @Input() headerLabels!: any[];
  @HostBinding('class') get getHostClasses(): string {
    return 'cvi-table-responsive';
  }

  getStatusBadgeLabelBySeverity = (severity: any) =>
    statuses.find((st: any) => st.severity === severity)?.label || 'info';
}