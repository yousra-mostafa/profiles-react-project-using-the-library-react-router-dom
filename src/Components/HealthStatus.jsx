

import { Grid } from "@mui/material";
import "./General.css";
import "./GeneralSection.css";
import "./HealthStatus.css"
function HealthStatus() {
    return (
        // <!-- -----------------------------Health-Status----------- -->
        <section id="Health-Status">
            <div className="container">


                <div className="section-title">
                    <h2>Health Status</h2>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <h3>Infectious diseases:</h3>
                        <p>nothing</p>
                    </Grid>
                    <Grid item xs={6}>
                        <h3>Health Problem:</h3>
                        <p>nothing</p>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={6}>

                        <h3>health medicine:</h3>
                        <p>nothing</p>
                    </Grid>
                    <Grid item xs={6}>

                        <h3>relatives disease:</h3>
                        <p>nothing</p>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
}

export default HealthStatus



