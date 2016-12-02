#!/usr/bin/env bash
cd dist
tar -zcvf ./../dist-admin.tar.gz * ./../node_modules ./../bower_components --totals
cd ..
scp -i ./deployKey.pem dist-admin.tar.gz ubuntu@54.152.103.212:/home/ubuntu
ssh -i ./deployKey.pem ubuntu@54.152.103.212 "\
mkdir -p admin && \
cd admin && \
tar -xzvf ./../dist-admin.tar.gz --totals && \
cd .. && \
rm -f dist-admin.tar.gz && \
exit"
rm -f dist-admin.tar.gz
