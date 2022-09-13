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
    default:
      return <Plan name="Ilmasto Mix 24kk Täysvesi, Täysaurinko,
      Täysydin, Täystuuli" description="Määräaikainen -sopimus sopii kaikkiin
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