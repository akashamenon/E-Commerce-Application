import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../../features/posts/Comments.css'

function Comments(props) {
    const { post, postId } = props;
    let stringData = '';
    var postd = post.filter(d => { return d.postId === postId });
    console.log(postId);
    const dataToDisplay = postd.forEach((data) => stringData = stringData + "\n" + data.body);
    console.log(dataToDisplay);
    return (
        <><div className="collection-items"><Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Comments</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <ul className="collection">
                    {postd.map(post =>
                    (
                        <div>
                            <li
                                key={post.id}
                                className="collection-item left-align red lighten-3"
                            >
                                <Typography>
                                    {post.body}
                                </Typography>
                            </li>
                        </div>
                    ))}
                </ul>
            </AccordionDetails>
        </Accordion>
        </div>
        </>
    )
}
export default Comments