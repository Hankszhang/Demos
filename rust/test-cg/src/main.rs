use core_graphics::display::CGDisplay;
use winit::{event_loop::EventLoop, window::WindowBuilder};

fn main() {
    let event_loop = EventLoop::new();
    let builder = WindowBuilder::new();
    let window = builder.build(&event_loop).unwrap();

    println!("Available_monitors:\n");

    window.available_monitors().for_each(|m| {
        println!("{:?}\n", m);
    });

    CGDisplay::active_displays().unwrap().into_iter().for_each(|id| {
        let display = CGDisplay::new(id);
        println!(
            "id: {}\nbounds: {:?}\nis_builtin: {}\nis_main: {}\nis_in_mirror_set: {}\nis_in_hw_mirror_set: {}\n",
            id,
            display.bounds(),
            display.is_builtin(),
            display.is_main(),
            display.is_in_mirror_set(),
            display.is_in_hw_mirror_set()
        );
    });
}
