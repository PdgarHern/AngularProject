import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../modelos/empleados';
import { EmpleadosServiceService } from '../shared/services/empleados-service.service';
import { LoadScriptsService } from '../shared/services/load-scripts.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  public empleados: Array<Empleado> = [];

  constructor(private empleadoService: EmpleadosServiceService, private router: Router, route: ActivatedRoute, private nameJs: LoadScriptsService) {

    route.params.subscribe((x) => {
      this.loadInfo();
    })

  }

  ngOnInit(): void {
    this.nameJs.Load(["sliderEmp"]);
  }

  loadInfo() {
    this.empleadoService.getEmpleados().subscribe((e: Array<Empleado>) => {
      this.empleados = e;
    })
  }

}
