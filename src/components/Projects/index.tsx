import { Heading, SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { api } from "../../services/api";
import { ProjectCard } from "./ProjectCard";

interface Repo {
  name: string;
  description: string;
  url: string;
}

export function Projects() {
  const { data, isLoading, isFetching, error } = useQuery("repos?type=owner", async () => {
    const { data } = await api.get("repos")

    console.log(data)

    const allRepos: Repo[] = data.map((repo: Repo) => {
      return {
        name: (repo.name.charAt(0).toUpperCase() + repo.name.replaceAll("_", " ").slice(1)),
        description: repo.description,
        url: repo.url
      }
    })

    let fourRepos: Repo[] = [];

    for(var i = 0; i < 4; i++) {
      fourRepos = [...fourRepos, allRepos[i]] 
    }

    return fourRepos;
  }, {
    staleTime: 1000 * 5 //5 segundos
  })

  return (
    <SimpleGrid flex="1" maxWidth={1120} w="100%" mx="auto" px="4" gap="1.625rem" minChildWidth="500px">
      { data && (
        data.map(data => (
          <ProjectCard name={data.name} description={data.description} url={data.url} />
        ))
      ) }
    </SimpleGrid>
  )
}