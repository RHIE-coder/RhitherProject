import { Router } from "express";

export type RouteOptions = {
    ignore?: boolean,
    root_path?: string
}

export type RouteElement = {
    options?:RouteOptions;
    router:Router;
}