use neon::prelude::*;

fn get_module_name(mut cx: FunctionContext) -> JsResult<JsString> {
    let obj = *cx.empty_object();
    Ok(obj.to_string(&mut cx)?)
}

fn is_valid(mut cx: FunctionContext) -> JsResult<JsBoolean> {
    Ok(cx.boolean(true))
}

fn num_cpus(mut cx: FunctionContext) -> JsResult<JsNumber> {
    Ok(cx.number(num_cpus::get() as f64))
}

fn nothing(mut cx: FunctionContext) -> JsResult<JsObject> {
    Ok(cx.empty_object())
}

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("num_cpus", num_cpus)?;
    cx.export_function("get_module_name", get_module_name)?;
    cx.export_function("is_valid", is_valid)?;
    cx.export_function("nothing", nothing)?;
    Ok(())
}
