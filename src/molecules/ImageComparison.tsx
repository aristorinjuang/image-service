import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

type Props = {
  jpeg: string
  webp: string
}

export default function ImageComparison(props: Props) {
  if (props.jpeg === '' || props.webp === '') {
    return <></>
  }
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={props.jpeg} alt={props.jpeg} />}
      itemTwo={<ReactCompareSliderImage src={props.webp} alt={props.webp} />}
    />
  )
}