import React from 'react';
import { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import styles from './About.module.css';
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit();

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const About = () => {

  const instalState = {
    isLoading: true,
    repoData: [],
    nik: 'eli4kina',
    userName: '',
    htmlUrl: '',
    avatarUrl: '',
    errMsg: '',
    fetchReposFailure: false
  }

  const [isLoading, setIsLoading] = useState(instalState.isLoading);
  const [repoData, setRepoData] = useState(instalState.repoData);
  const [nik, setNik] = useState(instalState.nik);
  const [userName, setUserName] = useState(instalState.userName);
  const [htmlUrl, setHtmlUrl] = useState(instalState.htmlUrl);
  const [avatarUrl, setAvatarUrl] = useState(instalState.avatarUrl);
  const [errMsg, setErrMsg] = useState(instalState.errMsg);
  const [fetchReposFailure, setFetchReposFailure] = useState(instalState.fetchReposFailure);

  useEffect (() => {
    octokit.repos.listForUser({username: nik})
      .then( ({data}) => {
        setRepoData(data);
        setIsLoading(false);
      })
      .catch(err => {
        setErrMsg(`Не удалось получить данные о пользователе ${nik}. Error text: ${err.message}`);
        setIsLoading(false);
        setFetchReposFailure(true);
      });

    if(!fetchReposFailure) {
      octokit.users.getByUsername({username: nik})
        .then( (response) => {
          setUserName(response.data.name)
          setHtmlUrl(response.data.html_url);
          setAvatarUrl(response.data.avatar_url);
        })
        .catch(err => {
          setErrMsg(`Не удалось получить данные о пользователе ${nik}. Error text: ${err.message}`);
          setIsLoading(false);
          setFetchReposFailure(true);
        });

    }
  }, [isLoading]);
  
  if(fetchReposFailure) {
    return(
      <div>{errMsg}</div>
    );
  } else {
    return (
      <div>
      {isLoading && <div className={styles.loading} ><CircularProgress /> </div>}
      
      
      { !isLoading && <div className={styles.content}>
        <img 
          id = "avatar" 
          src={avatarUrl} 
          alt="user avatar" 
          className={styles.avatar}
        ></img>
        <Container fixed>
          <a className={styles.title}  href={htmlUrl} >{userName}</a>
          <p className={styles.repoListHeading}>Список репозиториев</p>
          <List component="nav">
            {repoData.map(item => (
              <ListItemLink  href={item.html_url} key={item.id}>
                <ListItemText primary={ item.name } />
              </ListItemLink>
              ))}
          </List>
        </Container>
      </div>}
    </div>
    );
  }
};


export default About;