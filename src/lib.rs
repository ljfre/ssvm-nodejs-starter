use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn calculate_circle(params: i32) -> String {
  let radius: f64 = params.into();
  let area: f64 = std::f64::consts::PI * radius * radius;
  return area.to_string();
}

#[test]
fn test() {
  println!("{}", calculate_circle(1));
}
