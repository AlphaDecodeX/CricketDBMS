import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import mysql from "mysql";

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/getPersonData", (req, res) => {
  console.log(req.query.name);

  var sql3 =
    " use cricket_management_system; select * from person where first_name =? ";

  con.query(sql3, [req.query.name], async (err, rows, field) => {
    const result = [];
    if (!err) {
      rows[1].map((e) => {
        var category = e.category;
        console.log("category is", category);
        var id = e.id;
        console.log("id is=>", e.id);

        if (category == "coach") {
          console.log("coach");
          var Query =
            "use cricket_management_system; select * from person natural join coach where id =?";
          con.query(Query, [e.id], (err, rows, field) => {
            if (err) {
              console.log(err);
            } else {
              res.send(rows[1]);
            }
          });
        }

        if (category == "player") {
          console.log("is player");

          var Query =
            "Select id, name, format, dob,state,category,p_role,debut_date, count(*) as total_matches,sum(total_runs_scored) as Career_runs,avg(total_runs_scored) as Bat_Avg,(strike_rate) as strike_rate,sum(fours) as fours, sum(sixes) as sixes, sum(fifty) as fifties, sum(hundred) as hundreds, sum(wickets) as tot_wickets, avg(economy) as economy, sum(catches_taken) as catches from player_match_info natural join person natural join player_info full group by id, format having id =?;";

          con.query(Query, [e.id], (err, rows, field) => {
            if (err) {
              console.log(err);
            } else {
              res.send(rows);
            }
          });
        }
      });
    } else {
      res.send({ message: "player not found" });
    }
  });
});

app.get("/matchinfo", (req, res) => {
  const matchId = req.query.matchId;
  console.log(matchId);
  var query =
    "use cricket_management_system; select * from match_info natural join venue_info where match_id=?";
  con.query(query, [matchId], (err, rows, field) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows[1][0]);
    }
  });
});

app.post("/addPerson", (req, res) => {
  const {
    first_name,
    middle_name,
    last_name,
    dob,
    state,
    category,
    p_role,
    debut_date,
    c_role,
    tenure,
    start_date,
  } = req.body;
  console.log(req.body);

  var query =
    "use cricket_management_system;insert into person (first_name,middle_name,last_name,dob,state,category) values (?,?,?,?,?,?)";
  con.query(
    query,
    [first_name, middle_name, last_name, dob, state, category],
    (err, rows, field) => {
      if (err) console.log(err);
      else {
        var query_ =
          "use cricket_management_system; select * from person where first_name =?";
        con.query(query_, first_name, (err, rows, field) => {
          var id_ = rows[1][0].id;

          var category = rows[1][0].category;
          // console.log("rows", id, category);
          if (category == "player") {
            var query =
              "use cricket_management_system; insert into player_info (id, p_role, debut_date) value (?,?,?) ";
            con.query(query, [id_, p_role, debut_date], (err, rows, field) => {
              console.log("player is inserted", rows);
            });
          } else {
            console.log("following in coach");
            var query =
              "use cricket_management_system; insert into coach (id, role, tenure, start_date) value (?,?,?,?) ";
            con.query(
              query,
              [id_, c_role, tenure, start_date],
              (err, rows, field) => {
                console.log("coach is inserted", rows);
              }
            );
          }
        });
      }
    }
  );
});

app.post("/addMatchInfo", (req, res) => {
  const {
    format,
    india_total_runs,
    opponent_team,
    opponent_total_runs,
    winner,
  } = req.body;
  // console.log(req.body);
  var query =
    "use cricket_management_system; insert into match_info (opponent_team, india_total_runs, opponent_total_run, winner, format) values (?,?,?,?,?);";
  con.query(
    query,
    [opponent_team, india_total_runs, opponent_total_runs, winner, format],
    (err, rows, field) => {
      console.log("match info is updates", rows);
    }
  );
});

app.post("/postVenueInfo", (req, res) => {
  const {
    city,
    country,
    location,
    stadium_name,
    state,
    total_crowd_present,
    match_id,
  } = req.body;
  // console.log(req.body);
  var query =
    "use cricket_management_system; insert into venue_info (match_id,stadium_name,total_crowd_present, city ,state, country) values (?,?,?,?,?,?)";
  con.query(
    query,
    [match_id, stadium_name, total_crowd_present, city, state, country],
    (err, rows, field) => {
      console.log("match info is updates", rows);
    }
  );
});

app.post("/postPlayerMatchInfo", (req, res) => {
  const {
    total_runs_scored,
    strike_rate,
    total_balls_faced,
    fours,
    sixes,
    fifty,
    hundred,
    run_outs,
    wickets,
    runs_conceded,
    economy,
    maiden,
    over_thrown,
    catches_taken,
    match_id,
    player_id,
  } = req.body;

  var query =
    "use cricket_management_system; insert into player_match_info (id,match_id,total_runs_scored,strike_rate,total_balls_faced,fours,sixes,fifty,hundred,run_outs,wickets,runs_conceded,economy,maiden,overs_thrown,catches_taken) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
  con.query(
    query,
    [
      player_id,
      match_id,
      total_runs_scored,
      strike_rate,
      total_balls_faced,
      fours,
      sixes,
      fifty,
      hundred,
      run_outs,
      wickets,
      runs_conceded,
      economy,
      maiden,
      over_thrown,
      catches_taken,
    ],
    (err, rows, field) => {
      console.log("inserted", rows);
    }
  );
});

app.post("/deletePlayer", (req, res) => {
  const name = req.body.name.split(" ")[0];
  console.log(name);
  var query =
    "use cricket_management_system; delete from person where first_name =?";

  con.query(query, name, (err, rows, field) => {
    console.log("delte from person");
  });
});

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
