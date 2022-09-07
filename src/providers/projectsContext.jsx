import { createContext, useState } from "react";
import { toast } from "react-toastify";
import Api from "../services/api";

export const ProjectsContext = createContext({});

const ProjectsProvider = ({ children }) => {
  const [allProjects, setAllProjects] = useState([]);

  const getAllProjects = async () => {
    const userId = window.localStorage.getItem("authId");
    console.log(userId);

    const token = JSON.parse(window.localStorage.getItem("authToken"));
    if (token) Api.defaults.headers.authorization = `Bearer ${token}`;

    const data = await Api.get(`users/${userId}/projects`)
      .then((res) => setAllProjects(res.data))
      .catch((err) => console.error(err));

    return data;
  };

  const getProject = async (projectId) => {
    const token = window.localStorage.getItem("authToken");
    if (token) Api.defaults.headers.common.Authorization = token;

    const data = await Api.get(`/projects/${projectId}`)
      .then((res) => res.data)
      .catch((err) => console.error(err));

    return data;
  };

  const createProject = async (newProject) => {
    const token = window.localStorage.getItem("authToken");
    if (token) Api.defaults.headers.common.Authorization = token;

    const data = await Api.post(`/projects`, newProject)
      .then((res) => res.data)
      .catch((err) => console.error(err));

    return data;
  };

  const editProject = async (projectId, editedProject) => {
    const token = window.localStorage.getItem("authToken");
    if (token) Api.defaults.headers.common.Authorization = token;

    const data = await Api.patch(`/projects/${projectId}`, editedProject)
      .then((res) => res.data)
      .catch((err) => console.error(err));

    return data;
  };

  const deleteProject = async (projectId) => {
    const token = JSON.parse(window.localStorage.getItem("authToken"));
    if (token) Api.defaults.headers.authorization = `Bearer ${token}`;

    const data = await Api.delete(`/projects/${projectId}`)
      .then((res) => {
        toast.success("Projeto deletado com sucesso!", {
          autoClose: 2000,
        });
        getAllProjects();
      })
      .catch((err) => {
        toast.error("Falha ao deletar projeto!", {
          autoClose: 3000,
        });
      });

    return data;
  };

  return (
    <ProjectsContext.Provider
      value={{
        allProjects,
        getAllProjects,
        getProject,
        createProject,
        editProject,
        deleteProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
