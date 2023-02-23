import Koa from "koa";
import Router, { RouterContext } from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
import bodyParser from "koa-bodyparser";
import { filmData } from "./film_data"
import { CustomErrorMessageFunction, query, body, validationResults } from
"koa-req-validation";

const app: Koa = new Koa();
const router: Router = new Router();

const customerErrorMessage: CustomErrorMessageFunction = (
  _ctx: RouterContext,
  value: string) => {
    return (`the name must not less than 3 characters long but received length ${value.length}`)
  }

const validatorName = [
  body("name").isLength({min: 3}).withMessage(customerErrorMessage).build(),
  body("id").isInt({min: 10000, max:20000}).withMessage(customerErrorMessage).build(),
]

// Get
router.get("/", 
           query("name")
           .isLength({min:3})
           .optional()
           .withMessage(customerErrorMessage)
           .build(),
           async (ctx: RouterContext, next: any) => {
  // ctx.body = { msg: "Hello World!" };
  const result = validationResults(ctx);
  if(result.hasErrors()){
    ctx.status = 422;
    ctx.body = {err: result.mapped()}
  } else {
    ctx.body = ctx.body = {msg: `Hello World! #${ctx.query.name}`}
  }
  await next();
});

// Post
router.post("/",...validatorName ,async (ctx: RouterContext, next: any) => {
  const data = ctx.request.body;
  ctx.body = data;
  await next();
});

/// Exercies
/// get film list
router.get("/get_film", async (ctx: RouterContext, next: any) => {
  ctx.body = filmData;
  await next();
});
/// Exercies End

// other plug-ins
app.use(json());
app.use(logger());
app.use(router.routes()).use(router.allowedMethods());

/// handling the 404 not found error
app.use(async(ctx: RouterContext, next: any) => {
    try{
      await next();
      if(ctx.status === 404){
        ctx.status = 404;
        ctx.body = {err: "No such endpoint existed"}
        }
    } catch(err: any){
      ctx.body = {err: err}
      }
});



// start Koa
app.listen(10888, () => {
  console.log("Koa started");
})