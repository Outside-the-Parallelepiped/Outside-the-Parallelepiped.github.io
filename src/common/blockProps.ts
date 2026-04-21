import type { SbBlokData } from '@storyblok/vue'

export class BlockProps {
  _uid: string = ''
  component: string = ''
}

export class PageBlockProps extends BlockProps {
  body: SbBlokData[] = []
}

export class GridBlockProps extends BlockProps {
  columns: SbBlokData[] = []
}

export class TeaserBlockProps extends BlockProps {
  headline: string = ''
}

export class FeatureBlockProps extends BlockProps {
  name: string = ''
}

class ImageData {
  filename: string = ''
}

export class ImageBlockProps extends BlockProps {
  src: ImageData = { filename: '' }
}
