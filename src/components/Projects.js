import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
`;

const ProjectItem = styled.li`
  margin-bottom: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch your GitHub repository data here
    fetch('https://api.github.com/users/sahilkarnekar1/repos')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
      })
      .catch(error => {
        console.error('Error fetching GitHub projects:', error);
      });
  }, []);

  return (
    <Wrapper>
      <Title>Projects</Title>
      <ProjectList>
        {projects.map(project => (
          <ProjectItem key={project.id}>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              Project Link
            </a>
          </ProjectItem>
        ))}
      </ProjectList>
    </Wrapper>
  );
};

export default Projects;
