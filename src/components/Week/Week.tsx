import styles from "./Week.module.scss";

const Week = () => {
  return (
    <section className={styles.week}>
      <section>22</section>
      <section>23</section>
      <section>24</section>
      <section>25</section>
      <section>26</section>
      <section>27</section>
      <section>28</section>
      <section className={styles.week__notes}>Notes</section>
    </section>
  );
};

export default Week;
