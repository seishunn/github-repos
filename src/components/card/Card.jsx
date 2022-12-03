import React, {useEffect, useState} from 'react';
import {Button, Image, List, Avatar} from "antd";
import {useNavigate, useParams} from "react-router-dom";
import {getContributors, getCurrentRepo} from "../../API";
import './Card.less'
import Loader from "../Loader/Loader";

const Card = () => {
    const navigate = useNavigate();
    const {username, reponame} = useParams();
    const [repo, setRepo] = useState({});
    const [isFetching, setIsFetching] = useState(true);
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        getCurrentRepo(username, reponame, setRepo, setIsFetching);
        getContributors(username, reponame, setContributors);
    }, [])

    if (isFetching) {
        return <Loader/>
    } else {
        return (
            <div>
                <Button
                    type={'dashed'}
                    onClick={() => navigate(-1)}
                    style={{marginBottom: '20px'}}
                >Go Back</Button>
                <div>
                    <div className="userInfo">
                        <Image
                            width={200}
                            src={repo?.owner?.avatar_url}
                        />
                        <p>{repo.name}</p>
                    </div>
                    <List
                        itemLayout="horizontal"
                        dataSource={contributors}
                        renderItem={(contributor) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={contributor.avatar_url}/>}
                                    title={contributor.login}
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
};

export default Card;