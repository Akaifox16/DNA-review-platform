import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Dropdown, Stack } from 'react-bootstrap';

import { useAxios, useLayout, useOwnerChecker } from "../../hooks";
import { POSTS_QUERY } from "../../lib/query";
import { Response, SlugProps } from "../../lib/type";
import CommentSection from "../../components/Post/CommentSection";

const Slug = ({ content, author }:SlugProps) => {
    const owner = useOwnerChecker( author );
    
    return (
        <Stack>
            {
                owner && 
                <Dropdown>
                    <Dropdown.Toggle>
                        <Image 
                        src={'/favicon.ico'}
                        width={20}
                        height={20} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Edit</Dropdown.Item>
                        <Dropdown.Item>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            }
            <article>
                <ReactMarkdown children={content} />
            </article>
            <CommentSection comments={[]} />
        </Stack>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data }: Response = await useAxios(POSTS_QUERY, {}, '');
    const paths = data.data.posts.map(post => ({
        params: {
            slug: post.slug
        }
    }));

    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async () => {
    // const { data }= await useAxios(POSTS_QUERY, {}, false);
    const content = `# This is Test title 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt dolores saepe repellat excepturi sapiente
    obcaecati omnis. Velit ea odit minima in placeat, maiores hic cumque necessitatibus eius doloremque consectetur, quis 
    quod explicabo voluptatum dignissimos adipisci maxime, eum aliquid nemo vitae reprehenderit voluptates. Mollitia fugiat 
    maxime, labore voluptatum quis enim quibusdam earum, id praesentium culpa maiores inventore! Iure voluptas repellat 
    incidunt possimus illum architecto harum deserunt autem maiores doloribus aperiam nihil omnis odio ad deleniti, libero 
    officia commodi suscipit, quam alias hic voluptatibus ducimus laborum accusamus? Facilis in quaerat dolor explicabo, 
    vero non aliquid pariatur aperiam! Molestiae nisi dolores pariatur quaerat repellendus possimus quis officiis placeat 
    voluptatem aut? Quo praesentium magnam fugit, a nam officia tempore, laborum laboriosam, eligendi perferendis beatae 
    aliquam libero excepturi! Aut expedita nihil at illo ducimus nam nulla harum distinctio rerum! Quis earum voluptatem 
    explicabo officiis modi corrupti ipsum! Voluptatem est cupiditate, facilis quae aperiam mollitia odio assumenda 
    consequuntur quibusdam quisquam aut. Nesciunt, mollitia. Consequatur inventore similique quas dolorem voluptates quod 
    praesentium aperiam, culpa dolores officia odio, deleniti alias esse aliquam quam officiis totam quo dolore. Dolores, 
    fugiat, accusamus qui harum vel ullam aperiam eius esse nisi voluptatum expedita. Non rem culpa ipsam esse voluptate 
    obcaecati illum quisquam a sapiente hic alias laudantium delectus eaque libero consectetur quae, dolorem praesentium 
    ipsa quas. Maiores ullam tempora molestias assumenda, saepe commodi dolorum officiis perferendis libero qui omnis 
    exercitationem incidunt blanditiis dicta. Molestias consequatur aliquam eveniet ipsam ad, nostrum libero rerum accusantium 
    hic laudantium. Laboriosam voluptates dolorem saepe quae consequatur quas harum accusamus quis repellat maiores, vel 
    adipisci! Laboriosam enim nostrum totam iusto ratione architecto dolorum doloremque! Qui magnam commodi recusandae 
    numquam dolor rerum reiciendis quibusdam natus, corporis similique adipisci possimus autem eligendi, libero, error alias 
    atque modi provident. Omnis maiores distinctio nam modi esse voluptatibus enim, temporibus deleniti, fugiat amet repudiandae 
    assumenda totam architecto cumque praesentium nobis quisquam neque repellat consequatur nemo in possimus. Iste odio fugit 
    delectus velit eaque quaerat maiores nulla, pariatur ex. Expedita corrupti eligendi inventore repellat omnis nobis consequatur 
    sapiente dolorem quae quis nesciunt aliquid ratione voluptates, beatae veniam temporibus in pariatur doloremque amet! Expedita 
    natus hic necessitatibus explicabo consectetur incidunt eius illo ducimus aliquid. Iste voluptatem hic asperiores, et ab vitae 
    eligendi quibusdam perspiciatis aut omnis doloremque placeat porro provident qui sequi voluptate deleniti itaque atque cupiditate 
    distinctio iusto laudantium ad molestiae. Rem qui excepturi ad itaque corporis perspiciatis libero voluptatum, repudiandae 
    expedita, maiores ab? Sapiente officia nihil non soluta iste laudantium deserunt magni. Tempora sit quo, veniam praesentium 
    mollitia quam quibusdam. Ipsum, fugit! Veritatis natus quos recusandae minima perspiciatis deserunt? Placeat eaque, blanditiis 
    eius iure dolor ullam! Autem sit, hic obcaecati enim itaque error aliquam quas veritatis, cumque iure eligendi officiis inventore 
    praesentium, nisi beatae expedita at cum placeat cupiditate eos. Eius optio aspernatur ipsa illum quia? Exercitationem, incidunt iste? 
    Omnis modi dicta officiis ipsum recusandae nemo iusto alias molestiae aut, cum, ducimus fuga exercitationem placeat non fugiat eius 
    expedita, tempora nulla accusamus impedit laborum quaerat rerum veritatis. Provident facilis quidem repellendus.`;

    return {
        props:{
            content,
            author: 'testes',
        },
    };
}

Slug.getLayout = useLayout();

export default Slug;