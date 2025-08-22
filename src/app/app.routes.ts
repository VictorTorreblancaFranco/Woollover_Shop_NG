// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './feature/home/home'; // Asegúrate de que la ruta esté bien importada

export const routes: Routes = [
    { path: '', component: Home },
    // otras rutas si es necesario
];
