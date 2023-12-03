import {  CanActivateFn } from '@angular/router';

import { CustomerService } from './customer.service';
import { Injectable, inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  //Dependency Injection
  let service = inject(CustomerService);
  return service.getUserLoggedStatus();
};