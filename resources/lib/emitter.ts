import mitt from "mitt"

type Events = {
  proBannerVisibilityChange: "hidden" | "visible"
}

export const emitter = mitt<Events>()
