import HeaderDashboard from "../../components/HeaderDashboard";
import { DashboardMain } from "./style";
import NewProjectContainer from "./NewProjectContainer";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import ListBody from "./ListBody";
import ProjectList from "./ProjectList";
import { useContext, useEffect } from "react";
import { Context } from "../../providers/userContext";
import { ProjectsContext } from "../../providers/projectsContext";

function Dashboard() {
  const { navigate, token } = useContext(Context);
  const { allProjects, getAllProjects } = useContext(ProjectsContext);

  useEffect(() => {
    getAllProjects();
  }, []);

  if (!token) {
    setTimeout(() => {
      navigate("/login");
    }, 100);
  } else {
    return (
      <>
        <HeaderDashboard username="Cronoszinho" email="cronoszinho@gmail.com" />
        <DashboardMain>
          <NewProjectContainer />

          <ProjectList>
            <ListHeader />

            <ListBody>
              {allProjects.length ? (
                allProjects.map(
                  ({
                    id,
                    title,
                    start_date,
                    end_date,
                    price_per_hour,
                    timer,
                  }) => (
                    <ListItem
                      key={id}
                      projectId={id}
                      projectName={title}
                      startDate={start_date}
                      endDate={end_date}
                      pricePerHour={price_per_hour}
                      stopwatch={timer}
                    />
                  )
                )
              ) : (
                <>
                  <ListItem
                    projectName={"Joguito maroto"}
                    startDate={"2022-03-26"}
                    endDate={"2022-03-28"}
                    pricePerHour={"R$ 280,00"}
                    stopwatch={"02:58:07"}
                  />
                  <ListItem
                    projectName={"Joguinho maroto"}
                    startDate={"2022-03-26"}
                    endDate={"2022-03-28"}
                    pricePerHour={"R$ 280,00"}
                    stopwatch={"02:58:07"}
                  />
                  <ListItem
                    projectName={"Joguinho maroto"}
                    startDate={"2022-03-26"}
                    endDate={"2022-03-28"}
                    pricePerHour={"R$ 280,00"}
                    stopwatch={"02:58:07"}
                  />
                  <ListItem
                    projectName={"Joguinho maroto"}
                    startDate={"2022-03-26"}
                    endDate={"2022-03-28"}
                    pricePerHour={"R$ 280,00"}
                    stopwatch={"02:58:07"}
                  />
                </>
              )}
            </ListBody>
          </ProjectList>
        </DashboardMain>
      </>
    );
  }
}

export default Dashboard;
