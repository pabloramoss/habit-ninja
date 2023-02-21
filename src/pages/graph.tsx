import Calendar from "@/components/Graph/Calendar"

const GraphPage: React.FC = () => {
  return(
    <div style={{display: 'flex', gap:'2px', width: 500, height: 200, background: "white", justifyContent: "center"}} className="graph">
      <Calendar />
      </div>
  )
}

export default GraphPage