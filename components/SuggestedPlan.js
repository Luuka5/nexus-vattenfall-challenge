import useStore from "../lib/store"
import styles from "../styles/SuggestedPlan.module.css";

function Plan({name, description, price }) {
  return (
    <div className={styles.plan}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>{price}</p>
    </div>
  )
}


export function SuggestedPlan() {
  const suggestedPlan = useStore(state => state.suggestedPlan);

  switch (suggestedPlan) {
    case 'constant':
      return <Plan
        name="Ilmasto Vakio"
        description="Ilmasto Vakio soveltuu kohteisiin, joissa
        vuosikulutus on alle 2 500 kWh, kuten
        esimerkiksi kerrostaloasuntoihin.
        Kiinteän kuukausihinnan vuoksi tiedät
        sähkölaskusi suuruuden ennakolta.
        Sähkö on tuotettu fossiilivapaan Ilmasto
        Mixin mukaisesti vesi-, tuuli- ja
        ydinvoimalla."
        price="Kiinteä kuukausihinta: 25 EUR/kk"
      />;
    case 'kvartal':
      return <Plan
        name="Ilmasto/Täysvesi Kvartaali"
        description="Vaivaton sähkösopimus sopii kaikkiin koteihin
        ja pienyrityksiin. Sopimus on voimassa
        toistaiseksi ja sähkön hinta tarkistetaan
        neljästi vuodessa kvartaaleittain. Sopimuksen
        sähkö on tuotettu fossiilivapaasti vesi-, tuuli-
        ja ydinvoimalla"
        price="Energia: 12,70 snt/kWh Perusmaksu: 3,50 EUR/kk"
      />;
    default:
      return <Plan
        name="Ilmasto Mix 24kk Täysvesi, Täysaurinko, Täysydin, Täystuuli"
        description="Määräaikainen -sopimus sopii kaikkiin
        koteihin ja pienyrityksiin. Sähkön hinta pysyy
        samana koko sopimuskauden ajan ja
        lähestymme sinua uusintatarjouksella ennen
        sopimuskauden päättymistä. Sopimuksen
        sähkö on tuotettu fossiilivapaasti vesi, tuuli-
        aurinko- ja ydinvoimalla"
        price="Perusmaksu: 3,95 EUR/kk Energia: 12,48 snt/kWh"
      />;
  }
}