import CalendarHeatmap from 'react-calendar-heatmap';
import { Tooltip } from 'react-tooltip'

const Calendar: React.FC = () => {
  return (
    <>
<CalendarHeatmap
  startDate={new Date('2016-01-01')}
  endDate={new Date('2016-04-01')}
  values={[
    { date: '2016-01-22', count: 122 },
    { date: '2016-01-30', count: 38 },
    { date: '2016-02-01', count: 1 },
  ]}
  onMouseOver={(e, value) => console.log(value)}
  showWeekdayLabels={true}
  tooltipDataAttrs={(value: any) => {
    return {
      'data-tooltip-id': `data-tip`,
      'data-tooltip-content': `${value.date} has count: ${value.count}`,
    };
  }}
/>
<Tooltip id='data-tip' />
  </>
)}
export default Calendar