import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {AuthservicesService} from './services/authservices.service';




export const routes: Routes = [

  {path: '', component: DefaultLayoutComponent},
  
  // otherwise redirect to profile
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },

      {
        path: 'admin',
        // canActivate : [AuthservicesService],
        loadChildren: './views/admin/admin.module#AdminModule',
        
      },

      {
        path: 'student',
        canActivateChild: [AuthservicesService],
        loadChildren: './views/student/student.module#StudentModule'
      },
      
      {
        path: 'faculty',
        loadChildren: './views/faculty/faculty.module#FacultyModule'
      },

      {
        path: 'batch',
        loadChildren: './views/batch/batch.module#BatchModule'
      },

       {
        path: 'counsellor',
        loadChildren: './views/counsellor/counsellor.module#CounsellorModule'
     },

     {
      path: 'attendance',
      loadChildren: './views/attendance/attendance.module#AttendanceModule'
      },

     {
    path: 'test',
    loadChildren: './views/test/test.module#TestModule'
      },

      // {
      //   path: 'login',
      //   loadChildren: './views/loginuser/loginuser.module#LoginUserModule'
      //     },

      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
