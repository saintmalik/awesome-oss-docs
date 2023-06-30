package main

import (
	"html/template"
	"net/http"
	"os"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseGlob("templates/*.html"))
}

func awesomeoss(w http.ResponseWriter, r *http.Request) {
	tpl.ExecuteTemplate(w, "index.html", nil)
}

func main() {

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	} // this was for simple deployment on heroku

	fs := http.FileServer(http.Dir("public"))
	http.Handle("/public/", http.StripPrefix("/public/", fs))
	http.HandleFunc("/", awesomeoss)
	http.ListenAndServe(":"+port, nil)
}
