import Head from "next/head";
import styles from "../styles/Home.module.css";
import { orderBy, filter } from "lodash";

export default function Page(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clue #{props.challenge.number} - {props.challenge.group}{" "}
          Halloween Scavenger Hunt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <code className={styles.code}>
          <b>Clue #{props.challenge.number}</b> - {props.challenge.group}{" "}
          Halloween Scavenger Hunt
        </code>
        <h1 className={styles.title}>{props.challenge.name}</h1>

        <p className={styles.description}>{props.challenge.clue} </p>

        <div className={styles.grid}>
          <div
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3 style={{ fontWeight: "400" }}>
              Oh also, your special letter is: <b>{props.challenge.letter}</b>.
            </h3>
            <p>
              Remember to take note of all these letters, you'll need them to
              enter the final room.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const challenges = await fetch(
    "https://sampoder-api.herokuapp.com/v0.1/Scavenge/Challenges"
  )
    .then((r) => r.json())
    .then((challenges) =>
      challenges.map(({ id, fields }) => ({
        id,
        group: fields["Group"],
        name: fields["Name"],
        number: fields["Order"],
        clue: fields["Clue"],
        letter: fields["Special Letter"],
      }))
    )
    .then((challenges) =>
      filter(
        challenges,
        (challenge) => challenge.id === context.params.challenge
      )
    );
  const challenge = challenges[0];
  return { props: { challenge } };
};
