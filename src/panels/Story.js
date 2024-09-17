import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import { useEffect } from 'react';

export const Story = ({ id }) => {
    const routeNavigator = useRouteNavigator();

    useEffect(() => {
        async function showStoryBox() {
            const i = Math.floor(Math.random() * 122) + 1;
            await bridge.send('VKWebAppShowStoryBox', {
                background_type: 'image',
                url: `https://randomfox.ca/images/${i}.jpg`,
                attachment: {
                    text: 'book',
                    type: 'photo',
                    owner_id: 743784474,
                    id: 12345678
                }
            })
            .then((data) => {
                if (data.code_data) {
                    console.log(data);
                }
            })
            .catch((error) => {
                console.log(error);
            }); 
        }
        showStoryBox();
    }, []);
    

    return (
        <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
                Story
            </PanelHeader>
        </Panel>
    );
};

Story.propTypes = {
    id: PropTypes.string.isRequired,
};