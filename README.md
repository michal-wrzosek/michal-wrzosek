## Michał Wrzosek - my personal website

[michal.wrzosek.pl](http://michal.wrzosek.pl)

# Deployment

```
docker image build --no-cache -t michal-wrzosek-pl-web:0.1.2 . && \
  docker tag michal-wrzosek-pl-web:0.1.2 eu.gcr.io/michal-wrzosek-pl/michal-wrzosek-pl-web-web:0.1.2 && \
  docker push eu.gcr.io/michal-wrzosek-pl/michal-wrzosek-pl-web-web:0.1.2
```
