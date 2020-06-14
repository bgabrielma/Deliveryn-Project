import 'reflect-metadata';

// Factories
import database from './core/database';
import express from './core/express';

async function core() {
  try {
    await database().start();
    console.log('[Deliveryn API Project] database started...');
    await express().start();
    console.log('[Deliveryn API Project] express app started...');
    console.log('[Deliveryn API Project] server is now available');
  } catch (e) {
    console.error(
      '[Deliveryn API Project] An error ocurred: ' + (e as Error).stack!
    );
  }
}

core();
