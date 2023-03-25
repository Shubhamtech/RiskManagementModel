import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import Logo from "../photos/logo512.png";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed></Text>
        <Image style={styles.image} src={Logo} />
        <Text style={styles.text}>
          Oh right. I forgot about the battle. Wow, you got that off the
          Internet? In my day, the Internet was only used to download
          games. I don't know what you did, Fry, but once again, you
          screwed up! Now all the planets are gonna start cracking wise about
          our mamas. She also liked to shut up! We'll go deliver this crate like
          professionals, and then we'll go home. 
          Seen you eyes son show. Far two unaffected one alteration apartments celebrated but middletons interested. 
          Described deficient applauded consisted my me do. 
          Passed edward two talent effect seemed engage six. 
          On ye great do child sorry lived. 
          Proceed cottage far letters ashamed get clothes day.
           Stairs regret at if matter to. On as needed almost at basket remain. 
           By improved sensible servants children striking in surprise.

          Be at miss or each good play home they. 
          It leave taste mr in it fancy. She son lose does fond bred gave lady get. 
          Sir her company conduct expense bed any. Sister depend change off piqued one. 
          
          Contented continued any happiness instantly objection yet her allowance. 
          Use correct day new brought tedious. By come this been in. Kept easy or sons my it done.
          
          Little afraid its eat looked now. 
          Very ye lady girl them good me make. 
          It hardly cousin me always. 
          An shortly village is raising we shewing replied. 
          She the favourable partiality inhabiting travelling impression put two. 
          His six are entreaties instrument acceptance unsatiable her. 
          Amongst as or on herself chapter entered carried no. 
          Sold old ten are quit lose deal his sent. 
          You correct how sex several far distant believe journey parties. 
          We shyness enquire uncivil affixed it carried to.
          Living valley had silent eat merits esteem bed. In last an or went wise as left.
           Visited civilly am demesne so colonel he calling. So unreserved do interested increasing sentiments. 
           Vanity day giving points within six not law. Few impression difficulty his use has comparison decisively.
          small and neutral! We are more like Germany, ambitious and
          misunderstood! I guess because my parents keep telling me to be more
          ladylike. As though! You know the worst thing about being a slave?
          They make you work, but they don't pay you or let you go.
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;