import React from 'react';
import './Repo.less';
import {Card, Collapse, Descriptions} from "antd";
import {NavLink} from "react-router-dom";

const {Panel} = Collapse;


const Repo = (props) => {
    const repo = props.repo;

    return (
        <Card
            title={<NavLink to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink>}
            style={{width: '100%', margin: '20px 0'}}
            hoverable
            extra={<a href={repo.html_url}>Repo url</a>}
        >
            <Collapse>
                <Panel header="More Info" key="1">
                    <Descriptions title="Repo info" bordered>
                        <Descriptions.Item label="Stars Count">{repo.stargazers_count}</Descriptions.Item>
                        <Descriptions.Item label="Update Time"
                                           span={2}>{new Date(repo.updated_at).toLocaleString("en-US")}</Descriptions.Item>
                        <Descriptions.Item label="Description" span={3}>{repo.description}</Descriptions.Item>
                    </Descriptions>
                </Panel>
            </Collapse>
        </Card>
    );
};

export default Repo;